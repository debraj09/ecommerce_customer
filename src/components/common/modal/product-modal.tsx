"use client";
import React from "react";
import { Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { handleOpenModal } from "@/redux/features/utility";
import ShopDetailsUpper from "@/components/shop-details/shop-details-upper";

const ProductModal = () => {
  const { isShow, product } = useAppSelector((state) => state.utility);
  const dispatch = useAppDispatch();
  const handleModalClose = () => {
    dispatch(handleOpenModal());
  };
  return (
    <Modal
      show={isShow}
      onHide={() => handleModalClose()}
      centered={true}
      className="product-modal"
    >
      <div className="shopdetails-area">
        <div className="tpdetails__area">
          {/* shop details upper */}
          <ShopDetailsUpper product={product!} navStyle={true} />
          {/* shop details upper */}
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
