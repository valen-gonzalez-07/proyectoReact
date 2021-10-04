import * as React from 'react';
import { useParams } from 'react-router';
import ProductDetailC from '../Components/ProductDetailC/ProductDetailC';

const ProductDetail = () => {

    const [data, setData] = React.useState();
    const [cargando, setCargando] = React.useState(false);
    const [error, setError] = React.useState(null);
    const {id} = useParams();

    React.useEffect(() => {
        setCargando(true);
        fetch(`http://localhost:3001/productos/${id}`)
        .then((response) => response.json())
        .then((datos) => setData(datos))
        .catch((error) => setError(error))
        .finally(() => setCargando(false));
    }, [id])

    return (
        <section>
            {cargando && <h1>CARGANDO...</h1>}
            {error && <h1>Ha habido un error</h1>}
            <ProductDetailC
                productId={data?.id}
                initial={data?.initial}
                stock={data?.stock}
                marca={data?.title}
                varietal={data?.varietal}
                precio={data?.precio}
                img={data?.img}
                descripcion={data?.descripcion}
                varietalDescripcion={data?.varietalDescripcion}
                temperatura={data?.temperatura}
                comida={data?.comida}
            />
        </section>
    )
}

export default ProductDetail;
