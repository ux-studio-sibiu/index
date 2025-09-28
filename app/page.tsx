

import styles from './page.module.scss';

export default async function Home() {

  return (
    <div className = {`${styles['namespace-container']} clearfix `}>
      <video
        className="object-cover"
        src="images/static.webm"
        autoPlay loop muted playsInline
      />
       {/* <div className="studio-name">UX.STUDIO.SIBIU</div>
       
       <div className="studio-contact">ux.studio.sibiu@gmail.com</div> */}

        <div className="studio-mission">CREATIVE WEBSITES</div>
        <div className="animation"></div>


      </div>
  );
}