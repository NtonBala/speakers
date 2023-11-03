import { speakerList } from '../../../speakersData';
import SpeakerMenu from './SpeakerMenu';
import SpeakersList from './SpeakersList';
import { useThemeContext } from '../../contexts/ThemeContext';

function Speakers() {
  const { darkTheme } = useThemeContext();

  return (
    <div className={darkTheme ? 'theme-dark' : 'theme-light'}>
      <SpeakerMenu />
      <div className="container">
        <div className="row g-4">
          <SpeakersList speakerList={speakerList} />
        </div>
      </div>
    </div>
  );
}

export default Speakers;
