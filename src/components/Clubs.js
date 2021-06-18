import React, { useEffect, useState, createRef } from 'react'
import { useLeagueTeams } from '../hooks/teams-hook';
import { getSelectedLeague } from '../redux/selector';
import LeagueSelect from './LeagueSelect';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { db, storage } from '../firebase/firebase';
import OTable from './OTable';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TransitionsModal from './TransitionsModal';

function Clubs({ selectedLeague }) {
  const teams = useLeagueTeams({ leagueId: selectedLeague.id })
  const ref = createRef();
  const [rows, setRows] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [teamImage, setTeamImage] = useState('');

  const headerData = [
    { title: 'Name', key: 'name' }
  ]

  const createData = (name) => {
    return { name };
  }

  const clearState = () => {
    setTeamName('');
    setTeamImage('');
  }

  const onTeamCreateHandle = (e) => {
    e.preventDefault()

    const uploadTask = storage.ref(`teams/${teamImage.name}`).put(teamImage);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        alert(error.message);
      }, () => {
        storage
          .ref('teams')
          .child(teamImage.name)
          .getDownloadURL()
          .then(url => {
            db.collection('leagues').doc(selectedLeague.id).collection('teams').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              name: teamName,
              imageUrl: url
            }).then(() => clearState());
          })
      }
    )
  }

  const handleImageChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }

    setTeamImage(image)
  }

  useEffect(() => {
    setRows(teams.map((team) =>
      createData(team.team.name)
    ))
  }, [teams])

  return (
    <div className="club">
      <LeagueSelect />
      <br />
      <TransitionsModal buttonName="add New" ref={ref}>
        <div className="club__modalContainer">
          <h3>Add Team</h3>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <TextField
            id="file"
            type="file"
            accept="image/jpeg, image/png"
            name="image"
            style={{ display: "none" }}
            onChange={handleImageChange}
            variant="outlined"
          />
          {teamImage && <img src={URL.createObjectURL(teamImage)} alt="img" />}
          <label htmlFor="file" className="club__upload_image">
            <CloudUploadIcon color="secondary" style={{ fontSize: 50 }} />
          </label>

          <Button variant="contained" color="primary" onClick={onTeamCreateHandle}>
            Create a team
            </Button>
        </div>
      </TransitionsModal>
      <OTable rows={rows} header={headerData}>
        <Button color="secondary">Edit</Button>
      </OTable>
    </div>
  )
}

const mapStateToProps = state => {
  return { selectedLeague: getSelectedLeague(state) };
};

export default connect(mapStateToProps)(Clubs)