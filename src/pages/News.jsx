import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import {useState} from "react";
import {useSelector} from "react-redux";
import Pagination from "../components/Pagination";

export default function News() {

    const posts = useSelector((state) => state.news.posts)


    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <Header/>
            <p className="h2" style={{marginBottom: '60px', marginLeft: '40px', marginTop: '40px'}}><u>Список новостей</u>
            </p>

            {currentPosts && currentPosts.map(article =>(
                <div key={article.id}>
                    <ArticleCard title ={article.title}
                     text = {article.text}
                     img = {article.img}
                     id = {article.id}/>
                </div>
            ))}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />

            <Footer/>
        </div>)
}