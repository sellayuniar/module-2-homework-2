
const Text = (props) => {
    return (
        <div>
            <h2>{props.album.name}</h2>
            <h3> {props.artist.name}</h3>
        </div>
    )
}

export default Text;