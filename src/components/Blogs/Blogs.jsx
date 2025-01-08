import { useEffect } from "react"


const Blogs = () => {
    //const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
        fetchData();
    }, [])
  return (
    <div>

    </div>
  )
}

export default Blogs