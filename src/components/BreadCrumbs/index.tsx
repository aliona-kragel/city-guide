import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTranslation } from "react-i18next";
import LinkBreadCrumb from "components/base/LinkBreadCrumb";

const BreadCrumbs = () => {
  const { t } = useTranslation()

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb">
      <LinkBreadCrumb to="/cities">
        {t("cities")}
      </LinkBreadCrumb>
      <Typography color="#93A67E" fontWeight={"500"}>{t("cityDetails")}</Typography>
    </Breadcrumbs>
  )
};

export default BreadCrumbs