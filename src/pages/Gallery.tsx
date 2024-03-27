import { StorageManager, StorageImage } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css'
import { list } from 'aws-amplify/storage';
import { useEffect, useState } from 'react';


function Gallery() {
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        currentAuthenticatedUser();
    }, []);

    async function currentAuthenticatedUser() {
        try {
            const response = await list({
                prefix: '',
                options: {
                    accessLevel: 'private',
                }
            });
            console.log('Listed Items:', response.items);
            setItemsList(response.items);
        } catch (error) {
            console.log(error);
        }
    }

    const isImage = (item) => {
        return item.key.match(/\.(jpeg|jpg|gif|png)$/) != null;
    }

    return (
        <div>
            {/* Overall Container Styles */}
            <div style={{ margin: 25, marginTop: 40, border: '2px solid gray', padding: '35px', borderRadius: '10px' }}>

                {/* Upload Section Styles */}
                <h2 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                    Upload Your Files Here!
                </h2>
                <StorageManager accessLevel={'private'} maxFileCount={10} />

                {/* Gallery Container Styles */}
                <div style={{ display: 'flex', width: '100%', marginTop: '30px' }}>

                    {/* Images Section Styles */}
                    <div style={{ margin: 25, border: '2px solid gray', padding: '35px', borderRadius: '10px', flex: '9' }}>
                        <h2 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Images</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {itemsList.filter(item => isImage(item)).map((item, index) => (
                                <div key={index} style={{ margin: '10px' }}>
                                    <p style={{ textAlign: 'center' }}>{item.key}</p>
                                    <StorageImage
                                        imgKey={item.key}
                                        alt={item.key}
                                        accessLevel="private"
                                        style={{ height: '200px', width: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Files Section Styles */}
                    <div style={{ margin: 25, border: '2px solid gray', padding: '35px', borderRadius: '10px', flex: '1' }}>
                        <h2 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Other Files</h2>
                        {itemsList.filter(item => !isImage(item)).map((item, index) => (
                            <div key={index}>
                                <p style={{ textAlign: 'center' }}>{item.key}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Gallery