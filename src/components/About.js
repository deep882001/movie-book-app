/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const About = () => (
  <div
    css={css`
      position: relative;
    `}
  >
    <h2>The Open Movie Database</h2>
    <p>
      The OMDb API is a RESTful web service to obtain movie information, all
      content and images on the site are contributed and maintained by our
      users.
    </p>
  </div>
)

export default About
