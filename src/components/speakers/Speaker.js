import SpeakerDetail from './SpeakerDetail';
import { speakerList } from '../../../speakersData';
import { useThemeContext } from '../../contexts/ThemeContext';

export default function Speaker({ id }) {
  const { darkTheme } = useThemeContext();
  const speakerRec = speakerList?.find((rec) => rec.id === id);

  return speakerRec ? (
    <div className={darkTheme ? 'theme-dark' : 'theme-light'}>
      <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
    </div>
  ) : (
    <h2 className="text-danger">Speaker {id} not found</h2>
  );
}
