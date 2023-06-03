import React from "react"
import { minutesToRead } from "../Utility"

function Article({ preview, date = "January 1, 1970", minutes, title }) {
   return (
      <article>
         <h3>{title}</h3>
         <small>
            {date}
            {minutesToRead(minutes)}
         </small>
         <p>{preview}</p>
      </article>
   )
}

export default Article