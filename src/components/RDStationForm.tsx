import React, { useEffect } from "react";

declare global {
  interface Window {
    RDStationForms: {
      new (id: string, token: string | null): {
        createForm: () => void;
      };
    };
  }
}

const RDStationForm = () => {
  useEffect(() => {
    // Função para inicializar o formulário
    const initializeForm = () => {
      if (window.RDStationForms) {
        const formContainer = document.getElementById(
          "landing-page-alavancagem-patrimonial-9e05c1ec79b4417ac943"
        );
        if (formContainer && !formContainer.hasChildNodes()) {
          new window.RDStationForms(
            "landing-page-alavancagem-patrimonial-9e05c1ec79b4417ac943",
            null
          ).createForm();
        }
      }
    };

    const scriptId = "rd-station-forms-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        initializeForm();
      };
    } else {
      initializeForm();
    }
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto my-32 px-6">
      <div
        role="main"
        id="landing-page-alavancagem-patrimonial-9e05c1ec79b4417ac943"
      ></div>
    </div>
  );
};

export default RDStationForm;
