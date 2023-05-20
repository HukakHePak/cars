FROM node:16-slim AS build
COPY . .
RUN npm i
RUN npm run build

FROM alpine as server
RUN apk add wget
RUN wget https://github.com/nemasu/asmttpd/releases/download/0.4.5/asmttpd
RUN chmod 755 ./asmttpd
 
FROM scratch
COPY --from=server /asmttpd .
COPY --from=build /build /build
CMD ["/asmttpd", "./build", "80"]