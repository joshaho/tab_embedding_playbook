import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui";

import { Inventory } from './Inventory';
import { Overview } from './Overview';
import { Product } from './Product';
import { Shipping } from './Shipping';

export const Deere = () => {
  return (
    <Tabs defaultValue="overview" className="space-y-3">
      <TabsList>
        <TabsTrigger value="overview">
          Overview
        </TabsTrigger>
        <TabsTrigger value="product" >

        </TabsTrigger>
        <TabsTrigger value="customers" >
          Inventory
        </TabsTrigger>
        <TabsTrigger value="shipping" >
          Shipping
        </TabsTrigger>
      </TabsList>
      <section className="min-h-[892px]">
        <Overview />
        <Inventory />
        <Product />
        <Shipping />
      </section>
    </Tabs>
  )
}
