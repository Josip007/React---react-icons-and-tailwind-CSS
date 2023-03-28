import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage() {
  function handleEvents () {
    console.log('Click!')
  }

  return ( 
    <div>
      <div>
        <Button className='mb-5' secondary outline rounded onClick={handleEvents}>
          <GoBell />
          Click</Button>
      </div>
      <div>
        <Button className='mb-5' danger outline onMouseEnter={handleEvents}>
          <GoCloudDownload />
          Press</Button>
      </div>
      <div>
        <Button className='mb-5' warning>
          <GoDatabase />
          Handle</Button>
      </div>
      <div>
        <Button className='mb-5' secondary outline>hide ads</Button>
      </div>
      <div>
        <Button primary rounded>Something</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
