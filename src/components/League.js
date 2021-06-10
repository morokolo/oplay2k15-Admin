import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useAvailableLeagues } from '../hooks/leagues-hook';
import TransitionsModal from './TransitionsModal';
import OTable from './OTable';

function League() {
  const availableLeagues = useAvailableLeagues();
  const [rows, setRows] = useState([])

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


  return (
    <div>
      <TransitionsModal buttonName="add New">
        <p>content coming soon</p>
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
