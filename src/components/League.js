import React, { useEffect, useState, createRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useAvailableLeagues } from '../hooks/leagues-hook';
import TransitionsModal from './TransitionsModal';
import OTable from './OTable';

function League() {
  const availableLeagues = useAvailableLeagues();
  const ref = createRef();
  const [rows, setRows] = useState([]);
  const [leagueImage, setLeagueImage] = useState('');
  const [leagueName, setLeagueName] = useState('');
  const [leagueRegion, setLeagueRegion] = useState('');

  const headerData = [
    { title: 'Name', key: 'name' },
    { title: 'Region', key: 'region' },
    { title: 'Status', key: 'status' }
  ]
  const createData = (name, region, status) => {
    return { name, region, status };
  }

  useEffect(() => {
    setRows(availableLeagues.map((avlLeague) =>
      createData(avlLeague.league.name, avlLeague.league.region, avlLeague.league.status)
    ))
  }, [availableLeagues])

  const onTeamCreateSubmitHandle = (e) => {
    e.preventDefault()

  }

  const handleImageChange = (e) => {
    e.preventDefault()
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }

    setLeagueImage(image)
  }

  return (
    <div className="league">
      <TransitionsModal buttonName="add New" ref={ref}>
        <h2>Add League</h2>
        <form className="league__form" noValidate autoComplete="off" onSubmit={onTeamCreateSubmitHandle}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            value={leagueName}
            onChange={(e) => setLeagueName(e.target.value)}
          />
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Region</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={leagueRegion}
              onChange={(e) => setLeagueRegion(e.target.value)}
              label="League"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem key="l_1" value="South Africa">South Africa</MenuItem>
              <MenuItem key="l_2" value="England">England</MenuItem>
              <MenuItem key="l_3" value="Spain">Spain</MenuItem>
              <MenuItem key="l_4" value="Germany">Germany</MenuItem>
              <MenuItem key="l_5" value="USA">USA</MenuItem>
              <MenuItem key="l_6" value="Turkey">Turkey</MenuItem>
              <MenuItem key="l_7" value="World">World</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="file"
            type="file"
            accept="image/jpeg, image/png"
            name="image"
            style={{ display: "none" }}
            onChange={handleImageChange}
            variant="outlined"
          />
          {leagueImage && <img src={URL.createObjectURL(leagueImage)} alt="img" />}
          <p><label htmlFor="file">Upload Team Image</label></p>
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Save
        </Button>
        </form>
      </TransitionsModal>
      <br />
      <OTable rows={rows} header={headerData}>
        <Button color="secondary">Del</Button>
        <Button color="secondary">Edit</Button>
      </OTable>
    </div>
  )
}

export default League
