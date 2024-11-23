import { useEffect, useState } from 'react'

import axios from 'axios'
import ThesisCard from '../../../../custom/Cards/ThesisCard'

function LatestThesis() {
  const [theses, setTheses] = useState({
    latest: [],
    featured: [],
  })

  useEffect(() => {
    const fetchTheses = async () => {
      try {
        const response = await axios.get('/api/misc/home')
        setTheses(response.data)
      } catch (error) {
        console.error('Error fetching theses:', error)
      }
    }

    fetchTheses()
  }, [])

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <section className="content-inner position-relative">
            <div className="container">
              <div className="section-head text-center">
                <h2 className="title wow fadeInUp" data-wow-delay="0.8s">
                  Latest Thesis
                </h2>
              </div>
              <div className="row">
                {theses.latest.map(thesis => (
                  <ThesisCard
                    key={thesis.thesis_id}
                    author={thesis.author.name}
                    authorProfile={thesis.author.profilePic}
                    date={new Date(thesis.created_at).toLocaleDateString(
                      'en-US',
                      {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      }
                    )}
                    title={thesis.title}
                    desc={thesis.abstract.substring(0, 100) + '...'}
                    img_src="/assets/images/blog/t2.png"
                    thesis_id={thesis.thesis_id}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="content-inner position-relative">
            <div className="container">
              <div className="section-head text-center">
                <h2 className="title wow fadeInUp" data-wow-delay="0.8s">
                  Featured Thesis
                </h2>
              </div>
              <div className="row">
                {theses.featured.map(thesis => (
                  <ThesisCard
                    key={thesis.thesis_id}
                    author={thesis.author.name}
                    authorProfile={thesis.author.profilePic}
                    date={new Date(thesis.created_at).toLocaleDateString(
                      'en-US',
                      {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      }
                    )}
                    title={thesis.title}
                    desc={thesis.abstract.substring(0, 100) + '...'}
                    img_src="/assets/images/blog/t5.png"
                    thesis_id={thesis.thesis_id}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default LatestThesis
