import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getDatabase, ref, update } from "firebase/database";

export default function PagamentoSucesso() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const presenteId = params.get("presenteId");
    const nome = params.get("nome");
    const email = params.get("email");

    if (presenteId && nome && email) {
      const db = getDatabase();

      update(ref(db, `presentes/${presenteId}`), {
        pago: true,
        nomeComprador: nome,
        emailComprador: email,
        dataPagamento: new Date().toISOString()
      })
        .then(() => toast.success("Presente confirmado com sucesso!"))
        .catch(() => toast.error("Erro ao confirmar presente."));
    }
  }, [location]);

  return <p>Pagamento confirmado. Obrigado pelo presente!</p>;
}
