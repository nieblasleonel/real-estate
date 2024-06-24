"use client";
import React, { useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {   Select,  SelectContent,  SelectItem,  SelectTrigger,  SelectValue,} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Formik, Field, Form } from 'formik';
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import { supabase } from "@/utils/supabase/client";
import {toast} from 'sonner';

function EditListing() {
    const params = usePathname();
    useEffect(() => {
      console.log(params.split('/')[2]);    
    }, []);

    const onSubmitHandler = async (formValue:any)=>{       
            const { data, error } = await supabase
            .from('listing')
            .update(formValue)
            .eq('id', params.split('/')[2])
            .select();
           if(data){
            console.log(data);
            toast('Listing updated and Published');
           }                
    }
    
  return (
    <div className="px-10 md:px-36 my-10">
      <h2 className="font-bold text-lg">
        Enter some more details about your listing
      </h2>
      <Formik 
      initialValues={{
        type:'',
        propertyType:''
      }}
      onSubmit={(values)=>{
        onSubmitHandler(values);
      }}
      >
        {({
            values,
            handleChange,
            handleSubmit,
        })=>(
      <Form onSubmit={handleSubmit}>
      <div className="p-8 rounded-lg shadow-md">
        <div className="grid  grid-cols-1 md:grid-cols-3">
          <div>
            <h2 className="text-lg text-slate-500">Rent or Sell?</h2>
            <RadioGroup defaultValue="rent" onValueChange={(v)=>values.type=v}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Rent" id="Rent" />
                <Label htmlFor="Rent">Rent</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Sell" id="Sell" />
                <Label htmlFor="Sell">Sale</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-slate-500">Property Type</h2>
            <Select onValueChange={(e)=>values.propertyType=e} name="propertyType">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Single Family House">
                  Single Family House
                </SelectItem>
                <SelectItem value="Town House">Town House</SelectItem>
                <SelectItem value="Condo">Condo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500">Bedroom</h2>
            <Input type="number" placeholder="Ex. 2" name="bedroom" onChange={handleChange}/>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500">Bathroom</h2>
            <Input type="number" placeholder="Ex. 2" name="bathroom" onChange={handleChange}/>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500">Built In</h2>
            <Input placeholder="Ex.1900 Sq.ft" name="builtIn" onChange={handleChange}/>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500">Parking</h2>
            <Input type="number" placeholder="Ex.2" name="parking" onChange={handleChange}/>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500">Lot Size (Sq.ft)</h2>
            <Input type="number" placeholder="Ex.1900" name="lotSize" onChange={handleChange}/>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500">Area (Sq.ft)</h2>
            <Input placeholder="Ex.1900" name="area" onChange={handleChange}/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500">Selling Price ($)</h2>
            <Input type="number" placeholder="$ 400000" name="price" onChange={handleChange}/>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500">HOA (Per month) ($)</h2>
            <Input type="number" placeholder="$ 100" name="hoa" onChange={handleChange}/>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-8">
          <h2 className="text-gray-500">Description</h2>
          <Textarea placeholder="" name="description" onChange={handleChange}/>
        </div>
        <div className="flex gap-7 justify-end mt-5">
        <Button variant="outline" className="text-primary border-primary">Save</Button>
        <Button className="">Save & Publish</Button>
      </div>
      </div>
     
      </Form>)}
      </Formik>
    </div>
  );
}

export default EditListing;
