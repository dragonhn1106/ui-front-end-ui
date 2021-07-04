import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input, Grid } from "@material-ui/core";
import { Input as AntdInput } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./styles.css";
import { addNewItem } from '../../libs/services/add-item'
import NumberFormat from "react-number-format";

const validateSchema = yup.object().shape({
  // tenSanPham: yup.string().required('ten san pham la truong bat buoc'),
  noiSanXuat: yup.string().required('ten san pham la truong bat buoc'),
  giaBan: yup.string().required('Gia ban la truong bat buoc'),
  giaVon: yup.string().required('Gia von la truong bat buoc'),
  // avatar: yup.mixed().required('anh dai dien ten san pham la truong bat buoc')
});

function AddItemPage(props) {
  const [urlImage, setUrlImage] = useState();
  const fileInput = useRef();
  const [isValidateImage, setValidateImage] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateSchema),
  });
  const onSubmit = (data) => {
    const fileUpload = fileInput?.current?.files[0]
    if (fileUpload) {
      setValidateImage(false)
      addNewItem(fileUpload, data)
    }
    else {
      setValidateImage(true)
    }
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className="box-inp">
            <label>Tên sản phẩm</label>
            <div className="w-100">
              <input {...register("tenSanPham")} />
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
            <div className="w-100">
              <NumberFormat {...register("giaVon")} thousandSeparator={true} />
              {errors.giaBan && <p>{errors.giaBan.message}</p>}
            </div>
          </div>
          <div className="box-inp">
            <label>Giá bán</label>
            <div className="w-100">
              <NumberFormat {...register("giaBan")} thousandSeparator={true} />
              {errors.giaBan && <p>{errors.giaBan.message}</p>}
            </div>
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
                  setValidateImage(false)
                  setUrlImage(URL.createObjectURL(e.target.files[0]))
                }}
                type="file"
                name="avatar"
              />
              {isValidateImage && <p>anh dai dien ten san pham la truong bat buoc</p>}
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
