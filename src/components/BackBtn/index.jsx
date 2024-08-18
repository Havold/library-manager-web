import './BackBtn.scss';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function BackBtn() {
    const history = useNavigate();
    return <ArrowBack className="icon" onClick={() => history(-1)} />;
}

export default BackBtn;
