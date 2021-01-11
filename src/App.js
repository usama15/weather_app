import React from 'react';
import './App.css'
import axios from 'axios'


const App = () => {
    const [post, setPost] = React.useState(null)
    const [cities, setCities] = React.useState("")
    React.useEffect(() => {

        loadData()
    }, []);

    function loadData(){axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=f624ca5d6342db880adb7be63142ed06&units=metric`)
            .then(res => {
                const newPost = res.data
                setPost(newPost);
            });}


    return(
        <div className="app">
            <h1 className="main_name">Weather Application</h1>
            <div className="main-container">
                {post ? (
                    <div className="main">
                        <h1>{post.name}</h1>
                        <div className="temp">
                            <div className="temp_container_1">

                                <span>{JSON.stringify(post.main.temp)}°C</span>
                            </div>
                            <div className="m">
                            <h3>{post.weather[0].main}</h3>
                            </div>
                        </div>
                        <div className="c1">
                            <p><span>Feel Like:</span> {JSON.stringify(post.main.feels_like)}°C</p>
                            <p><span>Pressure:</span> {JSON.stringify(post.main.pressure)}</p>
                        </div>
                        <div className="hc2">
                            <p><span>Humidity:</span> {JSON.stringify(post.main.humidity)}%</p>
                            <p><span>TimeZone:</span>{JSON.stringify(post.timezone)}</p>
                        </div>
                    </div>
                ) : "Loading..."}

            </div>
            <div className="flex form">
                <input placeholder={"Enter City Name"} className="form-control me-2" type={'text'}  value={cities} onChange={(e) => setCities(e.target.value)}/>
                <button className="btn btn-outline-primary" onClick={loadData}>Seach City</button>
            </div>
        </div>
    );
}
export default App;