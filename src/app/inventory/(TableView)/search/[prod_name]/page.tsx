//components
import CustomTBody from "@/components/TemplateComponents/CustomTable/CustomTBody";
import CustomTHead from "@/components/TemplateComponents/CustomTable/CustomTHead";
import CustomTable from "@/components/TemplateComponents/CustomTable/CustomTable";
import CustomTd from "@/components/TemplateComponents/CustomTable/CustomTd";
import CustomTh from "@/components/TemplateComponents/CustomTable/CustomTh";
import CustomTr from "@/components/TemplateComponents/CustomTable/CustomTr";
//utils
import searchProductByName from "@/utils/apiRequests/searchProductByName";
import { nanoid } from "nanoid";

export default async function SearchProdNamePage({
  params,
}: {
  params: { prod_name: string };
}) {
  const { response: data } = (await searchProductByName(
    params.prod_name,
  )) as IProductApiRes;

  return (
    <section className="h-fit max-h-[650px] w-full overflow-hidden overflow-x-auto overflow-y-auto">
      <CustomTable>
        <CustomTHead>
          <CustomTh></CustomTh>
          <CustomTh>NAME</CustomTh>
          <CustomTh>PRICE</CustomTh>
          <CustomTh>QUANTITY</CustomTh>
        </CustomTHead>

        <CustomTBody>
          {data.map((item, index) => (
            <CustomTr key={nanoid()} prod_id={Number(item.id)}>
              <CustomTd>{index + 1}</CustomTd>
              <CustomTd>{item.prod_name}</CustomTd>
              <CustomTd>
                {item.prod_currency}
                {item.prod_price}
              </CustomTd>
              <CustomTd>{item.prod_quantity}</CustomTd>
            </CustomTr>
          ))}
        </CustomTBody>
      </CustomTable>
    </section>
  );
}
