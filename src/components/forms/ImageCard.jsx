import "../../styles/ImageCard.css";
export default function ImageCard({ info, articulo, stock }) {

    return (
        <>         
            <section id="img-card1" className="img-card">
                <svg
                    viewBox="0 0 16 16"
                    className="bi bi-image-fill"
                    fill="currentColor"
                    height="60"
                    width="60"
                   
                >
                    <path
                        d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
                    ></path>
                </svg>
                <div className="img-card__content  ">
                  
                     {/* <img className="img-fluid" src="./puerta.png" alt="imagen"  />  */}
                    <p className="img-card__description ">
                        {articulo}
                        <br />
                        {info}
                    </p>
                    {stock < 1 && (
                        <button className="btn btn-primary ">Generar Pedido</button>
                    )}
                </div>
            </section>

        </>
    )
}

