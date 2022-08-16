import Load from '../loader/loader.svg';

function Loader() {
    const curve = {
        'height':'100vh',
        'width':'100%'
    }
return(
    <>
        <img src={Load} alt="waves" style={curve} />
    </>
)
}
export default Loader;