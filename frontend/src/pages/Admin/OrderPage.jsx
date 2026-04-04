import { Spin, Table, message, Select } from "antd";
import { useEffect, useState } from "react";

const OrderPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await fetch(`${apiUrl}/orders/${orderId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        message.success("Sipariş durumu güncellendi.");
        setDataSource((prev) =>
          prev.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
      } else {
        message.error("Durum güncellenirken hata oluştu.");
      }
    } catch (error) {
      message.error("Sunucu bağlantı hatası.");
    }
  };

  const columns = [
    {
      title: "Sipariş ID",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <b>{text.substring(text.length - 6)}</b>,
    },
    {
      title: "Müşteri Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Sipariş Fiyatı",
      dataIndex: "amount",
      key: "amount",
      render: (record) => <b>${record.toFixed(2)}</b>,
    },
    {
      title: "Sipariş Durumu",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <Select
          defaultValue={text || "Hazırlanıyor"}
          style={{ width: 140 }}
          onChange={(value) => handleStatusChange(record._id, value)}
          options={[
            { value: "Hazırlanıyor", label: "Hazırlanıyor" },
            { value: "Kargoda", label: "Kargoda" },
            { value: "Teslim Edildi", label: "Teslim Edildi" },
            { value: "İptal Edildi", label: "İptal Edildi" },
          ]}
        />
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${apiUrl}/orders`);

        if (response.ok) {
          const data = await response.json();
          setDataSource(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl]);

  return (
    <Spin spinning={loading}>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(record) => record._id}
        loading={loading}
      />
    </Spin>
  );
};

export default OrderPage;
