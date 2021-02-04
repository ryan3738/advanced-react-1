import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination';
import Products from '../../components/Products';

function ProductsPage() {
  const { query } = useRouter();

  return (
    <>
      <Pagination page={Number(query.page) || 1} />
      <Products page={Number(query.page) || 1} />
      <Pagination page={Number(query.page) || 1} />
    </>
  );
}

export default ProductsPage;
