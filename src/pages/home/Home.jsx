import './home.css'
import Navbar from '../../components/navbar/Navbar'
import BlogCard from '../../components/blog_card/BlogCard.jsx'
function Home() {
    return (
        <div className='home'>
            <Navbar />
            
            <BlogCard/>
        </div>
    )
}

export default Home
