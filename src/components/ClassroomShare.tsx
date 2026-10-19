import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useLanguage } from "../i18n/context";
export default function ClassroomShare({ link }: { link: string }) {
  const { t } = useLanguage();
  const [notice, setNotice] = useState("");
  return (
    <div className="classroom-share">
      <div>
        <label>
          {t("Tautan peserta")}
          <input
            readOnly
            value={link}
            onFocus={(e) => e.currentTarget.select()}
          />
        </label>
        <button
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(link);
              setNotice("Tautan disalin.");
            } catch {
              setNotice("Pilih tautan lalu salin secara manual.");
            }
          }}
        >
          {t("Salin tautan")}
        </button>
        <p role="status">{t(notice)}</p>
      </div>
      <QRCodeSVG
        role="img"
        value={link}
        size={152}
        marginSize={4}
        title={t("Pindai untuk bergabung ke sesi")}
      />
    </div>
  );
}
