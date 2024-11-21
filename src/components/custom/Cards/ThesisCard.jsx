import { Link } from 'react-router-dom'

function ThesisCard({
  author,
  date,
  title,
  desc,
  img_src,
  thesis_id,
  authorProfile,
}) {
  return (
    <div className="col-lg-4 col-md-6 m-b30">
      <div
        className="dz-card style-1 overlay-shine wow fadeInUp"
        data-wow-delay="1.0s"
        style={{ height: '450px', display: 'flex', flexDirection: 'column' }}
      >
        <div
          className="dz-media"
          style={{ height: '250px', overflow: 'hidden' }}
        >
          <Link to={`/thesis/${thesis_id}`}>
            <img
              src={img_src}
              alt="img"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </Link>
          <span className="date">
            <a href="#" onClick={e => e.preventDefault()}>
              {date}
            </a>
          </span>
        </div>
        <div
          className="dz-info"
          style={{
            flexGrow: 1,
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div className="dz-meta">
              <ul>
                <li className="post-author text-primary">
                  <span>
                    {authorProfile &&
                    !authorProfile.includes('scholarvault.com') ? (
                      <img
                        src={authorProfile}
                        alt="author"
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                        }}
                      />
                    ) : (
                      <i className="fa-solid fa-user" />
                    )}
                  </span>
                  {author}
                </li>
              </ul>
            </div>
            <h4 className="dz-title">{title}</h4>
            <p>{desc}</p>
          </div>
          <div>
            <Link to={`/thesis/${thesis_id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThesisCard
