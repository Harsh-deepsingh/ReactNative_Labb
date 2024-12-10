// import urlList from '../data/urlList.json';
import ImageProp from './imageProp';

export default function ItemList(){
    
    let items = [...urlList]; //Uncomment and change the import at the top as needed

return(
    <div>
        <ul>
            <ImageProp source={items.map} />
        </ul>
    </div>
      )
    };