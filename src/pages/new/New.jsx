import { ArrowBack, DriveFolderUploadOutlined } from '@mui/icons-material';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './new.scss';
import { useEffect, useState } from 'react';

const defaultImg = 'https://i.pinimg.com/564x/37/08/99/3708994bdca38cd8dbea509f233f3cf4.jpg';

function New({ inputs, title }) {
    const [img, setImg] = useState({ preview: defaultImg });

    const handleChangeImg = (e) => {
        const file = e.target.files[0];
        if (file) {
            file.preview = URL.createObjectURL(file);
            setImg(file);
            e.target.value = null;
            console.log(img);
        }
    };

    useEffect(() => {
        return () => {
            if (img) {
                URL.revokeObjectURL(img.preview);
                console.log('Cleanup');
            }
        };
    }, [img]);

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <ArrowBack className="icon" />
                    <h1>{title}</h1>
                </div>

                <div className="bottom">
                    <div className="left">
                        <img src={img.preview} alt="no-image" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="uploadImg">
                                    Image: <DriveFolderUploadOutlined className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="uploadImg"
                                    onChange={handleChangeImg}
                                    style={{ display: 'none' }}
                                />
                            </div>

                            {inputs.map((item) => {
                                return (
                                    <div className="formInput">
                                        <label>{item.label}</label>
                                        <input type={item.type} placeholder={item.placeholder} />
                                    </div>
                                );
                            })}
                        </form>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;
