import { AddToCart } from 'components/cart/add-to-cart';
import { Preorder } from 'components/cart/preorder';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/types';

export function ProductDescription({ product }: { product: Product }) {

  console.log(product.state?.type);


  if (product.state?.type === 'SOLD_OUT') {
    return (
      <div className="mb-6 flex flex-col pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <p className="text-sm text-gray-500">This product is sold out. You can still preorder it.</p>

        <div className="my-6">
          <Preorder />
        </div>

        {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      </div>
    );
  }

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>


        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
      <AddToCart product={product} />
    </>
  );
}
