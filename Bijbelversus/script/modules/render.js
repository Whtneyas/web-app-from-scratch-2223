
export function addData(data) {
    const section = document.getElementById("content")
    let html;
    data.forEach((item) => {
      html = `
          <article >

              <h2>${item.book_name}</h2> <span>${item.verse}</span>
              <h3>${item.chapter}</h3>
              <p>${item.text}</p>
               <div>
               <button>Next </button>
               </div>
          </article>

        `;
      section.insertAdjacentHTML('beforeend', html)
    });
  }

  export default addData

