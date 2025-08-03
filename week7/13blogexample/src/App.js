import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import { books } from './data';

function App() {
  return (
    <div className="container">
      <div className="v1">
        <h1>Book Details</h1>
        <BookDetails books={books} />
      </div>
      <div className="v1">
        <BlogDetails />
      </div>
      <div className="v1">
        <CourseDetails />
      </div>
    </div>
  );
}
export default App;
