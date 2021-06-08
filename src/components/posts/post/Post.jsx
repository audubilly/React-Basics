import "./post.css"
const Post = ({post}) =>{

    let month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    let dateTime = new Date(post.publishDate).getDate();

    // console.log(dateTime)

    let date = post.publishDate.substr(6, 1);
    let monthString = month[parseInt(date)];


    const imgPostContainer ={
        height: '30vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${post.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: 'center'
    }

    return(
        <div className="post-wrapper">
            <div className="post-header">
                <img src={post.owner.picture}/>
                <span className="post-username">{post.owner.lastName}</span>
                {/*<h3 className="date-time">{dateTime}</h3>*/}
            </div>
            <div style={imgPostContainer}>
                <div className="post-calender">
                   <h3>{dateTime}</h3>
                    <h3>{monthString}</h3>
                </div>
            </div>

            <div className="post-content">
                <h2>{post.text}</h2>
            </div>
        </div>
    )
}

export default Post;