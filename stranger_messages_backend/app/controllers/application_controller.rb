class ApplicationController < ActionController::API
  def test
    render json: { test: "success yes" }
  end
end
