import React, {useContext, useEffect, useState} from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import {ApiContext} from 'api/api';
import TopMenu from "../components/layout/TopMenu";
import {Dialog} from "primereact/dialog";
import {HeadingH2, HeadingH3, Hr, TextBody} from "../components/styles";
import IconPanel from "../components/layout/IconPanel";
import Button from "../components/layout/Button";
import ImageGallery from 'react-image-gallery';
import Advantage from "../components/layout/Advantage";
import AlertBox from "../components/layout/AlertBox";
import Function from "../components/layout/Function";
import {Icon} from "../components/styled";
import Tip from "../components/layout/Tip";

interface ComponentProps {
}

const images = [
    {
        original: '/gallery/pracovni_plosina_nifty120t_rozlozena.jpg',
        thumbnail: '/gallery/pracovni_plosina_nifty120t_rozlozena.jpg',
    },{
        original: '/gallery/pracovni_plosina_nifty120t_transport2.jpg',
        thumbnail: '/gallery/pracovni_plosina_nifty120t_transport2.jpg',
    },
    {
        original: '/gallery/pracovni_plosina_nifty120t_transport.jpg',
        thumbnail: '/gallery/pracovni_plosina_nifty120t_transport.jpg',
    },
    {
        original: '/gallery/pracovni_plosina_nifty120t.jpg',
        thumbnail: '/gallery/pracovni_plosina_nifty120t.jpg',
    },
];

const IndexPage: React.FC<ComponentProps> = () => {
    return (
        <>
            <PageWrapper>
                <TopMenu></TopMenu>
                <ContentAndOrderDialog>
                    <Content>
                        <ImageGallery items={images}/>
                        <Advantages>
                            <IconPanel icon={"/icons/square.svg"}><HeadingH2>Hlavní výhody</HeadingH2></IconPanel>
                            <AdvantagesWrapper>
                                <Advantage description={"Velký dosah"}
                                           icon={"/icons/advantage/distance.svg"}></Advantage>
                                <Advantage description={"Snadná manipulace"}
                                           icon={"/icons/advantage/manipulation.svg"}></Advantage>
                                <Advantage description={"Postačuje ŘP kategorie B"}
                                           icon={"/icons/advantage/drivinglicence.svg"}></Advantage>
                                <Advantage description={"Velká nosnost"}
                                           icon={"/icons/advantage/loadingweight.svg"}></Advantage>
                                <Advantage description={"Videonávod zdarma"}
                                           icon={"/icons/advantage/videotutorial.svg"}></Advantage>
                            </AdvantagesWrapper>
                        </Advantages>
                        <Hr></Hr>
                        <DetailWrapper>
                            <IconPanel icon={"/icons/square.svg"}><HeadingH2>Detail</HeadingH2></IconPanel>
                            <Paragraphs><Paragraph>Přívěsná pracovní plošina Nifty 120TAC je speciálně navržena tak, aby
                                poskytoval
                                maximální
                                dosah s co nejkompaktnějším podvozkem.</Paragraph>
                                <Paragraph>Využitím všestranného teleskopického horního koše poskytuje Nifty 120T
                                    bezkonkurenční
                                    pracovní dosah, zejména na nižších úrovních, kde je to nejvíce potřeba.</Paragraph>
                                <Paragraph>Hydraulické podpěry umožňují rychlé a snadné nastavení pracovní plošiny.
                                    Teleskopické nápravy
                                    spojené s velmi kompaktní základnou dělají z Nifty 120TAC jednu z nejkompaktnějších
                                    a
                                    nejovladatelnějších plošin na trhu.</Paragraph></Paragraphs>
                            <AlertBox icon={"/icons/exclamation.svg"} backgroundColor={"white"}><TextBody>Naše plošina
                                disponuje
                                <strong> unikátním
                                    pojezdem s vlastním pohonem umožňující jednoduchou manipulaci</strong>. Přesun na
                                finální pozici
                                (např.
                                po trávníku, chodníku i přes obrubník) zvládnete bez námahy.</TextBody></AlertBox>
                            <MainFunctionalitiesWrapper>
                                <HeadingH3>Hlavní funkce</HeadingH3>
                                <FunctionsWrapper>
                                    <Function heading={"Teleskopická horní klec"}
                                              description={"Vyšší přesnost při polohování plošiny"}/>
                                    <Function heading={"Plně proporcionální hydraulické ovládání"}
                                              description={"Jednoduché na ovládání"}/>
                                    <Function heading={"Bi-Energy k dispozici"} description={"Optimalizace využití"}/>
                                    <Function heading={"Teleskopické nápravy"}
                                              description={"Přístup přes dvojité dveřní otvory"}/>
                                    <Function heading={"Hydraulické výložníky"}
                                              description={"Pro rychlé a snadné nastavení"}/>
                                    <Function heading={"Pojezd s vlastním pohodem"}
                                              description={"Jednoduchý přes na místě (napájen 220V)"}/>
                                </FunctionsWrapper>
                            </MainFunctionalitiesWrapper>
                            <AlertBox icon={"/icons/man.svg"} backgroundColor={"white"}><TextBody>Nemáte chuť nebo čas s
                                pracovní plošinou operovat sami? Nabízíme možnost <strong>pronájmu plošiny včetně
                                    kvalifikované
                                    osoby</strong>.</TextBody></AlertBox>
                            <KeyParamsWrapper>
                                <HeadingH3>Klíčové technické parametry</HeadingH3>
                                <KeyParamsList>
                                    <KeyParam>Maximální provozní výška: <strong>12,2 m</strong></KeyParam>
                                    <KeyParam>Boční dosah: <strong>6,1 m</strong></KeyParam>
                                    <KeyParam>Šířka podpěr: <strong>3,5 m</strong></KeyParam>
                                    <KeyParam>Otáčení: <strong>360°</strong></KeyParam>
                                    <KeyParam>Transportní délka: <strong>4,5 m</strong></KeyParam>
                                    <KeyParam>Transportní šířka: <strong>1,50 m</strong></KeyParam>
                                    <KeyParam>Transportní výška: <strong>1,90 m</strong></KeyParam>
                                    <KeyParam>Rozměry klece: <strong>0,65 x 1,1 m</strong></KeyParam>
                                    <KeyParam>Nosnost klece: <strong>200 kg</strong></KeyParam>
                                    <KeyParam>Celková hmotnost: <strong>1 300 kg</strong></KeyParam>
                                </KeyParamsList>
                            </KeyParamsWrapper>
                            <DownloadButtonWrapper>
                                <DownloadButton href={"/manual_pracovni_plosina_nifty120t.pdf"} target={"_new"}>
                                    <Icon src={"/icons/download.svg"}/><p>Stáhnout návod k obsluze (PDF)</p>
                                </DownloadButton></DownloadButtonWrapper>
                            <img src={"/gallery/img_3.png"}/>
                            <img src={"/gallery/img_4.png"}/>
                            <AlertBox icon={"/icons/sale.svg"} backgroundColor={"#d9ecff"}><TextBody>Speciální víkendový
                                balíček umožní za 3 900 Kč zápůjčku plošiny od pátku 18:00 do pondělí 7:00. Víkendový
                                balíček objednávejte telefonicky nebo informaci dopiště do
                                poznámky.</TextBody></AlertBox>
                            <Hr/>
                            <TipsWrapper>
                                <IconPanel icon={"/icons/square.svg"}><HeadingH2>Tipy pro
                                    použití</HeadingH2></IconPanel>
                                <TipsInner>
                                    <Tip icon={"/icons/tips/tip1.svg"} text={"Čištění komínů"}/>
                                    <Tip icon={"/icons/tips/tip2.svg"} text={"Opravy a nátěry fasád"}/>
                                    <Tip icon={"/icons/tips/tip3.svg"} text={"Odstraňování ledu a sněhu ze střech"}/>
                                    <Tip icon={"/icons/tips/tip4.svg"} text={"Vánoční výzdoby"}/>
                                    <Tip icon={"/icons/tips/tip5.svg"} text={"Údržba a čištění nemovitostí"}/>
                                    <Tip icon={"/icons/tips/tip6.svg"} text={"Prořezávky stromů"}/>
                                    <Tip icon={"/icons/tips/tip7.svg"} text={"Opláštění a zasklívání budov"}/>
                                    <Tip icon={"/icons/tips/tip8.svg"} text={"Montáže a údržba kamerových systémů"}/>
                                    <Tip icon={"/icons/tips/tip9.svg"} text={"Montáž fotovoltaických panelů"}/>
                                    <Tip icon={"/icons/tips/tip10.svg"} text={"Montáž reklamních plachet a bannerů"}/>
                                    <Tip icon={"/icons/tips/tip11.svg"} text={"Zednické práce"}/>
                                </TipsInner>
                            </TipsWrapper>
                            <Hr/>
                            <IconPanel icon={"/icons/square.svg"}><HeadingH2>Jak zápůjčka probíhá</HeadingH2></IconPanel>
                            <ListWrapper>
                                <li>provedenou rezervaci potvrdíme e-mailem nebo telefonicky</li>
                                <li>při předání proběhne zaškolení, zodpovězení dotazů a všechny formality (podpis nájemné smlouvy, platba, nafocení aktuálního stavu) </li>
                                <li>poskytneme potřebné bezpečností prvky (helma, zabezpečovací pás, ,…)</li>
                                <li>v případě potřeby jsme na telefonu 704 042 042</li>
                                <li>při vrácení plošinu zkontrolujeme a pokud je vše v pořádku, kauci hned vracíme</li>
                            </ListWrapper>
                            <IconPanel icon={"/icons/square.svg"}><HeadingH2>Podmínky zapůjčení plošiny</HeadingH2></IconPanel>
                            <ListWrapper>
                                <li>vyzvednutí mezi 7:00 a 8:00, vrácení do 18:00</li>
                                <li>vratná kauce ve výši 5 000 Kč splatná při předání</li>
                                <li>nájemce ručí za dodržení podmínek dle VOP a splnění všech zákonných požadavků</li>
                                <li>vrácení bez vad a ve stejném stavu (např. bez nečistot)</li>
                            </ListWrapper>
                        </DetailWrapper>

                    </Content>
                    <StickyOrderDialog>
                        <DialogWrapper>
                            <HeadingH2>Přívěsná pracovní plošina
                                Nifty 120TAC</HeadingH2>
                            <IconPanel icon={"/icons/poi.svg"}>
                                <Col>
                                    <Address>Hlavní 227, 250 82 Tuklaty</Address>
                                    <Link href={"https://goo.gl/maps/TC5KqAM1Gng8UUKR7"}>Zobrazit na mapě</Link>
                                    <Paragraph>Plošina s úctyhodnými dosahy (12m do výšky a 6m bokem), ale kompatním podvozkem pro převoz (šxd 1,5 x 4,5m). Disponuje pojezdem s vlastním pohonem pro snadnou manipulaci.
                                    </Paragraph>
                                </Col>
                            </IconPanel>
                            <IconPanel icon={"/icons/car.svg"}>
                                <Col>
                                    <Paragraph><ParagraphBold>Vyzvednutí zdarma</ParagraphBold>nebo<br/>
                                        <ParagraphBoldInline>možností přivezení</ParagraphBoldInline> (16
                                        Kč/km)</Paragraph>
                                </Col>
                            </IconPanel>
                            <Hr></Hr>
                            <PriceAndButtonWrapper>
                                <PriceDescription>
                                    <HeadingH3>Cena/den</HeadingH3>
                                    <PriceFrom>
                                        <HeadingH2>od 1 499 Kč</HeadingH2>
                                        <PriceVat>(bez DPH)</PriceVat>
                                    </PriceFrom>
                                </PriceDescription>
                                <ButtonWrapper>
                                    <Button label={"Nezávazně poptat"} href={"mailto:rezervace@plosiny-bagry.cz?subject=Poptavka rezervace"}></Button>
                                </ButtonWrapper>
                                <Note>Nebo volejte 704 042 042</Note>
                            </PriceAndButtonWrapper>
                        </DialogWrapper>
                    </StickyOrderDialog>
                </ContentAndOrderDialog>
            </PageWrapper>
            <Footer>
                <FooterContact>
                    <NotesAndHeading>
                        <IconPanel icon={"/icons/square.svg"}><HeadingH3>Náš
                            kontakt</HeadingH3></IconPanel>
                        <p>V případě jakýchkoliv dotazů nás neváhejte kontaktovat</p>
                    </NotesAndHeading>
                    <IconPanel icon={"/icons/phone.svg"}><ContactItem>704 042 042</ContactItem></IconPanel>
                    <IconPanel icon={"/icons/email.svg"}><ContactItem>rezervace@plosiny-bagry.cz</ContactItem></IconPanel>
                </FooterContact>

            </Footer>
            <DarkFooter>
                <FooterSocial>
                    <img src={"/icons/footerlogo.svg"}/>
                </FooterSocial>
            </DarkFooter>
        </>
    );
}

const Note = styled.div`
  display: flex;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 23px;
  color: #2F2F2F;
`

const FooterSocial = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: #434343;
  padding: 40px 0;
`

const ContactItem = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #2F2F2F;
`

const NotesAndHeading = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #555555;
  }
`
const FooterContact = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  padding: 48px 0;
  align-items: flex-end;
`

const Footer = styled.div`
  background-color: #eee;
  margin-top: 24px;
`

const DarkFooter = styled.div`
  background-color: #434343;
`


const ListWrapper = styled.div`
  row-gap: 24px;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  li {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #555555;
  }
`

const TipsInner = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 16px;
  row-gap: 54px;
`

const TipsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`


const DownloadButtonWrapper = styled.div`
  display: flex;
  cursor: pointer;
`
const DownloadButton = styled.a`
  display: flex;
  border-radius: 4px;
  padding: 16px 32px;
  border: 2px solid #FA7800;
  gap: 8px;
  text-decoration: none;

  p {
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.01em;
    text-align: left;

  }

`

const ContactWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
`

const KeyParam = styled.li`
  list-style: inside disc;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #555555;

  strong {
    font-weight: 700;
  }
`
const KeyParamsList = styled.ul`
  row-gap: 24px;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 2rem;
`
const KeyParamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const FunctionsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 24px;
  gap: 12px;
`

const MainFunctionalitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`

const DetailWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  row-gap: 32px;
`

const AdvantagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Advantages = styled.div`
  display: flex;
  margin: 32px 0px;
  row-gap: 32px;
  flex-direction: column;

`

const PriceVat = styled.div`
  font-family: 'Exo';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: var(--ms-black);
`

const PriceFrom = styled.div`
  display: flex;
  align-items: center;
`

const PriceLabel = styled.div`
  display: flex;

`

const PriceDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`

const ButtonWrapper = styled.div`
  display: flex
`
const PriceAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`

const ParagraphBoldInline = styled.b`
  font-family: 'Open Sans';
  display: inline;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #555555;
`

const ParagraphBold = styled.b`
  font-family: 'Open Sans';
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #555555;
`

const Paragraph = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #555555;

`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`

const Link = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: var(--ms-blue);
  cursor: pointer;
  text-decoration: none;
`

const Address = styled.div`
  font-family: 'Exo';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;

  color: #555555;
`

const DialogWrapper = styled.div`
  display: flex;
  background: #FFFFFF;
  box-shadow: 0px 6px 16px rgba(47, 47, 47, 0.2);
  border-radius: 16px;
  padding: 32px;
  flex-direction: column;
  row-gap: 24px;
  position: sticky;
  top: 100px;


`
const StickyOrderDialog = styled.div`
  width: 42%;
`

const Content = styled.div`
  width: 58%;
`

const ContentAndOrderDialog = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;

`

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media screen and (min-width: var(--ms-desktop)) {
    padding: 2.1875rem 0.625rem 3.4375rem 0.625rem;
  }

`

export default IndexPage;
