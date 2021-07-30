@extends("layouts.master")

@section('contenido')
<div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-success text-white">
                <span>Registrar lectura</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="fecha-txt" class="form-label">Fecha</label>
                    <input type="number" class="form-control" id="fecha-txt">
                </div>
                <div class="mb-3">
                    <label for="hora-txt" class="form-label">Hora</label>
                    <input type="text" id="hora-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="mediddor-select" class="form-label">Medididor</label>
                    <select class="form-select" id="medidor-select">
                    </select>
                </div>
                <div class="mb-3">
                    <label for="descripcion-txt" class="form-label">Descripcion</label>
                    <input type="text" id="descripcion-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="-txt" class="form-label">Valor</label>
                    <input type="number" class="form-control" id="valor-txt">
                </div>
                <label for="tipo-select" class="form-label">Tipo medida</label>
                <select class="form-select" id="tipo-select">
                </select>
            </div>
            <div class="card-footer d-grid gap-1">
                <button id="registrar-btn" class="btn btn-info">Registrar</button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/lecturasService.js')}}"></script>
    <script src="{{asset('js/servicios/medidaService.js')}}"></script>
    <script src="{{asset('js/servicios/medidorService.js')}}"></script>
    <script src="{{asset('js/registrar_lectura.js')}}"></script>
@endsection