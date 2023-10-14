import Header from '../shared/components/header';

function News() {
  return (
    <div className="container mx-auto m-4 p-5 shadow-md max-w-4xl">
      <div className="flex justify-center">
        <div className="flex flex-col ">
          <Header title="News" />
        </div>
      </div>
    </div>
  );
}
export default News;
