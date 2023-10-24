function Video({ title, age ,verified}) {
        let verify;
        if(verified===true){
                verify= <div>Channel is :{title} ✅</div>
        }
        else{
                verify= <div>Channel is :{title} </div>
        }
        return (        
                <div style={{margin:"0px 10px"}}>
                        <img src="https://picsum.photos/id/1/200/300" alt="hello" ></img>
                        
                       {verify}
                        <div>Title is :{title} </div>
                        <div> Age is : {age}</div>
                </div>
        );
}

export default Video;
