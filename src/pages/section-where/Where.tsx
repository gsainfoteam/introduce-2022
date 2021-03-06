import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Text from "components/Text";
import Button from "../../components/Button";
import useIsMobile from "../../hooks/useIsMobile";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 370px;
  margin-top: 150px;
  background: linear-gradient(
    95.45deg,
    rgba(250, 215, 144, 0.24) 5.63%,
    rgba(250, 215, 144, 0.729166) 42.96%,
    #fcb46d 87.8%
  );
`;

const Where: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <Root id="where-scroll-view">
      <Text size={isMobile ? "30px" : "45px"} weight="900" marginTop="75px">
        {t("where.title")}
      </Text>
      <Text
        align="center"
        size={isMobile ? "14px" : "23px"}
        weight="400"
        marginTop="45px"
      >
        {t("where.description")
          .split("\n")
          .map((line, lineIndex) => (
            <div key={lineIndex}>{line}</div>
          ))}
      </Text>
      {/*  <Button marginTop="50px">{t("where.button")}</Button>*/}
    </Root>
  );
};

export default Where;
