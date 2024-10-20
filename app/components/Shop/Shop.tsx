import { products } from '@wix/stores';
import testIds from '@app/utils/test-ids';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';

export function Shop({ items }: { items: products.Product[] }) {
  return (
    <div className="mx-auto">
      <div
        className="bg-black text-custom-1 text-center py-4 sm:py-10 sm:py-20 lg:h-[450px] h-[320px]"
        data-testid={testIds.SHOP_PAGE.HEADER}
      >
        <h1 className="uppercase text-3xl sm:text-6xl">Merch</h1>
      </div>
      {items.length ? (
        <div
          className="full-w overflow-hidden mx-auto text-center mt-[-200px] sm:mt-[-130px] px-10"
          data-testid={testIds.PRODUCT_LIST.CONTAINER}
        >
          <ul className="grid sm:grid-cols-3 gap-8 grid-flow-row">
            {items.map((item) => (
              <li
                key={item._id}
                className="relative border border-2 border-red-500"
                data-testid={testIds.PRODUCT_ITEM.CONTAINER}
              >
                <a
                  href={`/product-page/${item.slug}`}
                  data-testid={testIds.PRODUCT_ITEM.PRODUCT_DETAILS_CTA}
                >
                  <div className="h-auto max-w-full">
                    <WixMediaImage
                      media={item.media?.mainMedia?.image?.url}
                      height={560}
                      width={560}
                      alt={
                        item.media?.mainMedia?.image?.altText || 'main image'
                      }
                    />
                  </div>
                  {item.stock?.inventoryStatus === 'IN_STOCK' ||
                  item.stock?.inventoryStatus === 'PARTIALLY_OUT_OF_STOCK' ? (
                    <a
                      data-testid={testIds.PRODUCT_ITEM.BUY_NOW_CTA}
                      className="btn-shop absolute -mt-10 right-0 cursor-pointer"
                      href={`/product-page/${item.slug}`}
                    >
                      Buy
                    </a>
                  ) : (
                    <button
                      className="btn-shop absolute -mt-10 right-0 cursor-pointer"
                      disabled
                    >
                      Out of Stock
                    </button>
                  )}
                  <div className="p-2 text-left">
                    <span>{item.name}</span>
                    <br />
                    <span className="text-xs">
                      {item.price!.formatted!.price}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-3xl w-full text-center p-9 box-borderbox-border max-w-4xl mx-auto">
          No products found.
        </div>
      )}
    </div>
  );
}
