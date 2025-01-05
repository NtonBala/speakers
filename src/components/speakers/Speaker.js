import { useContext } from 'react';
import SpeakerDetail from './SpeakerDetail';
import { ThemeContext } from '../../contexts/ThemeContext';
import { SpeakersDataContext, SpeakersDataProvider } from '../../contexts/SpeakersDataContext';

function Inner({ id }) {
  const { darkTheme } = useContext(ThemeContext);
  const { speakerList, loadingStatus } = useContext(SpeakersDataContext);
  const speakerRec = speakerList?.find((rec) => rec.id === id);

  if (loadingStatus === 'loading') return <div>Loading...</div>;

  return speakerRec ? (
    <div className={darkTheme ? 'theme-dark' : 'theme-light'}>
      <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
    </div>
  ) : (
    <h2 className="text-danger">Speaker {id} not found</h2>
  );
}

export default function Speaker({ id }) {
  return (
    <SpeakersDataProvider>
      <Inner id={id} />
    </SpeakersDataProvider>
  );
}
