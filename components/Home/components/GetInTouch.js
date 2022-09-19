import { Widget } from "@typeform/embed-react";
import Link from "next/link";
import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full py-6">
      <Widget id="jRvuSxog" className="my-form h-[700px] w-full" />
    </div>
  );
};

export default function GetInTouch() {
  return (
    <div className="bg-white py-12 text-black" id={"get-in-touch"}>
      <div className="container flex flex-col items-center">
        <Link className="" href={"/support"} passHref>
          <span className=" ml-0 mt-4 self-center rounded-full bg-tulip px-6 py-3 text-xl font-bold text-black no-underline hover:cursor-pointer hover:bg-base-light hover:text-tulip hover:shadow-lg md:mt-0 md:ml-4">
            {"Love what we do? Get in touch!"}
          </span>
        </Link>
        <p className="mt-7 text-center">
          {"We're here to answer all your queries. Reach out to us!"}
        </p>
        {/* <div sx={{
                    width: "65%"
                }}>
                    <div
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            color: "white"
                        }}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Name"
                            placeholder="WholeMark inc."
                            multiline
                            maxRows={4}
                            sx={{
                                my: {
                                    xs: 2,
                                    md: 2
                                },
                                textAlign: 'center',
                                textTransform: 'uppercase'
                            }}

                        />
                        <TextField
                            id="outlined-textarea"
                            label="Email"
                            placeholder="example@wholemark.in"
                            multiline
                            sx={{
                                my: {
                                    xs: 2,
                                    md: 2
                                },
                                textAlign: 'center',
                                textTransform: 'uppercase'
                            }}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            placeholder="Maximum of 120 characters"
                            sx={{
                                my: {
                                    xs: 2,
                                    md: 2
                                },
                                textAlign: 'center',
                                textTransform: 'uppercase'
                            }}
                        />
                    </div>
                    <div sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Button
                            variant="contained"
                            color="tulip"
                            sx={{
                                color: "white",
                                mt: 6,
                                zIdex: 99
                            }}>
                            <Typography sx={{
                                px: 10,
                                textTransform: "none",
                                fontSize: '1.5rem',
                                fontWeight: 900
                            }}>
                                {"Send"}
                            </Typography>

                        </Button>
                    </div>
                </div> */}
      </div>
    </div>
  );
}
