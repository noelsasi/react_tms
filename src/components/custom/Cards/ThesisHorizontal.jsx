import { Link } from 'react-router-dom'

function ThesisHorizontal({
  title,
  abstract,
  author,
  date,
  img_src,
  thesis_id,
}) {
  return (
    <div className="col-lg-12 ">
      <div
        className="dz-card style-1 blog-half overlay-shine wow fadeInUp"
        data-wow-delay="1.0s"
      >
        <div className="dz-media">
          <img src={img_src} alt="img" />

          <span className="date">
            <a href="#" onClick={e => e.preventDefault()}>
              {date}
            </a>
          </span>
        </div>
        <div className="dz-info">
          <div className="dz-meta">
            <ul>
              <li className="post-author text-primary">
                <span>
                  <i className="fa-solid fa-user" />
                </span>
                {author}
              </li>
            </ul>
          </div>
          <h4 className="dz-title">
            <Link href="/thesis">{title}</Link>
          </h4>
          <p>{abstract}</p>
        </div>
      </div>
    </div>
  )
}

export default ThesisHorizontal
