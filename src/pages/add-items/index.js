import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input, Grid } from "@material-ui/core";
import { Input as AntdInput } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./styles.css";
import { addNewItem } from '../../libs/services/add-item'
const SignupSchema = yup.object().shape({
  tenSanPham: yup.string().required(),
  noiSanXuat: yup.string().required(),
});

function AddItemPage(props) {
  const [urlImage, setUrlImage] = useState();
  const fileInput = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    const fileUpload = fileInput?.current?.files[0]
    const x = addNewItem(fileUpload, data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className="box-inp">
            <label>Tên sản phẩm</label>
            <div className="w-100">
              <input {...register("tenSanPham")} />
              {errors.tenSanPham && <p>{errors.tenSanPham.message}</p>}
            </div>
          </div>
          <div className="box-inp">
            <label>Nơi sản xuất</label>
            <div className="w-100">
              <input {...register("noiSanXuat")} />
              {errors.noiSanXuat && <p>{errors.noiSanXuat.message}</p>}
            </div>
          </div>
          <div className="box-inp">
            <label>Mã sản phẩm</label>
            <input {...register("maSanPham")} />
          </div>
          <div className="box-inp">
            <label>Mã vạch</label>
            <input {...register("maVach")} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="box-inp">
            <label>Giá vốn</label>
            <input {...register("giaVon")} />
          </div>
          <div className="box-inp">
            <label>Giá bán</label>
            <input {...register("giaBan")} />
          </div>
          <div className="box-inp">
            <label>Số lượng</label>
            <input {...register("soLuong")} />
          </div>
          <div className="box-inp">
            <label>Ảnh đại diện</label>
            <div>
              <input
                ref={fileInput}
                onChange={(e) => {
                  console.log("evel", URL.createObjectURL(e.target.files[0]));
                  setUrlImage(URL.createObjectURL(e.target.files[0]))
                }}

                type="file"
                name="picture"
              />
              <img className='w-100' src={urlImage} />
            </div>
          </div>
        </Grid>
      </Grid>
      <input type="submit" />
    </form>
  );
}

export default AddItemPage;
