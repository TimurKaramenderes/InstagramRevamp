import "./FooterRegister.css";


const FooterRegister =  () => {
    return (
      <p className='text'>
        <span className='line'>
          {/*put router link here*/}
          Vous avez déjà un compte ? <a href='./Feed/Hall.js'>Connectez-vous.</a>
        </span>
      </p>
    );
}

export default FooterRegister;

