package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
  data := map[string]string{
    "username": "user123",
    "password": "pass123",
  }

  jsonData, _ := json.Marshal(data)
  resp, _ := http.Post("https://api.demoblaze.com/login", "application/json", bytes.NewBuffer(jsonData))
  fmt.Println(resp.StatusCode)
}