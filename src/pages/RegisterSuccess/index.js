import React from "react";
import { Link } from "react-router-dom";
import { LayoutOne, Card, Text, Button } from "upkit";

export default function RegisterSuccess() {
  return (
    <LayoutOne size="small">
      <Card color="white">
        <div className="text-center">
          <Text as="h3">Pendaftar Behasil</Text>
          <Text>Silakan masuk ke aplikasi</Text>
          <br />
          <Link to="/login">
            <Button fitContainer>Masuk</Button>
          </Link>
        </div>
      </Card>
    </LayoutOne>
  );
}
