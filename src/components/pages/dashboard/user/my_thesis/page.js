import Pagination from "@/app/components/misc/Pagination";

function My_thesis() {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">List of Thesis</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md">
                    <thead>
                      <tr>
                        <th style={{ width: 80 }}>
                          <strong>ID</strong>
                        </th>
                        <th>
                          <strong>Title</strong>
                        </th>
                        <th>
                          <strong>Author</strong>
                        </th>
                        <th>
                          <strong>Category</strong>
                        </th>
                        <th>
                          <strong>Keywords</strong>
                        </th>
                        <th>
                          <strong>Abstract</strong>
                        </th>
                        <th>
                          <strong>Views</strong>
                        </th>
                        <th>
                          <strong>Downloads</strong>
                        </th>
                        <th>
                          <strong>Status</strong>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          id: "01",
                          title: "AI in Health Care",
                          author: "David",
                          category: "Medicine",
                          keywords: "AI, Healthcare",
                          abstract: "The use of AI in health care",
                          status: "Accepted",
                        },
                        {
                          id: "02",
                          title: "Machine Learning in Education",
                          author: "Susan",
                          category: "Education",
                          keywords: "ML, Education",
                          abstract:
                            "Leveraging ML to enhance learning outcomes",
                          status: "Accepted",
                        },
                        {
                          id: "03",
                          title: "Blockchain for Data Security",
                          author: "Michael",
                          category: "Computer Science",
                          keywords: "Blockchain, Security",
                          abstract:
                            "Exploring blockchain for enhancing data security",
                          status: "Pending",
                        },
                        {
                          id: "04",
                          title: "Climate Change Modeling",
                          author: "Emma",
                          category: "Environmental Science",
                          keywords: "Climate, Modeling",
                          abstract: "AI-based climate prediction models",
                          status: "Rejected",
                        },
                        {
                          id: "05",
                          title: "Smart Farming with IoT",
                          author: "James",
                          category: "Agriculture",
                          keywords: "IoT, Agriculture",
                          abstract: "Using IoT to enhance farming practices",
                          status: "Accepted",
                        },
                        {
                          id: "06",
                          title: "Augmented Reality in Tourism",
                          author: "Sophia",
                          category: "Tourism",
                          keywords: "AR, Tourism",
                          abstract: "Enhancing tourist experiences with AR",
                          status: "Accepted",
                        },
                        {
                          id: "07",
                          title: "Cybersecurity Strategies",
                          author: "Liam",
                          category: "Cybersecurity",
                          keywords: "Cybersecurity, Strategies",
                          abstract:
                            "Best practices for securing digital assets",
                          status: "Rejected",
                        },
                        {
                          id: "08",
                          title: "Deep Learning for Image Recognition",
                          author: "Olivia",
                          category: "Artificial Intelligence",
                          keywords: "Deep Learning, AI",
                          abstract:
                            "Advancements in image recognition using deep learning",
                          status: "Accepted",
                        },
                        {
                          id: "09",
                          title: "Natural Language Processing",
                          author: "Noah",
                          category: "Computer Science",
                          keywords: "NLP, AI",
                          abstract: "Exploring NLP techniques and applications",
                          status: "Accepted",
                        },
                        {
                          id: "10",
                          title: "Renewable Energy Solutions",
                          author: "Isabella",
                          category: "Environmental Science",
                          keywords: "Renewable, Energy",
                          abstract:
                            "Innovations in renewable energy technologies",
                          status: "Accepted",
                        },
                        {
                          id: "11",
                          title: "Data Analytics in Sports",
                          author: "Oliver",
                          category: "Sports",
                          keywords: "Data, Sports",
                          abstract:
                            "Using data analytics to enhance sports performance",
                          status: "Accepted",
                        },
                      ].map(
                        ({
                          id,
                          title,
                          author,
                          category,
                          keywords,
                          abstract,
                          status,
                        }) => {
                          const views =
                            status === "Accepted"
                              ? Math.floor(Math.random() * 1000)
                              : "-";
                          const downloads =
                            status === "Accepted"
                              ? Math.floor(Math.random() * 500)
                              : "-";

                          return (
                            <tr key={id}>
                              <td>
                                <strong>{id}</strong>
                              </td>
                              <td>{title}</td>
                              <td>{author}</td>
                              <td>{category}</td>
                              <td>{keywords}</td>
                              <td>{abstract}</td>
                              <td>{views}</td>
                              <td>{downloads}</td>
                              <td>{status}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default My_thesis;
