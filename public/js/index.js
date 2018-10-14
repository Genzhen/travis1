$(function () {
    $.ajax({
        url: "http://localhost:3000/index/index",
        type: 'GET',
        success: function (res) {
            var html;
            if (res) {
                // for (var i = 0; i < res.length; i++) {
                    html += "<tr>" +
                        "<td class=\"book_name\">" + res.name + "</td>" +
                        "<td>" +
                        "<button class=\"see\" id=\"see\" class=\"btn\" data-id=" + res.id +
                        ">查看</button>" +
                        " <button class=\"edit\" class=\"btn\" data-id=" + res.id +
                        ">修改</button>" +
                        "<button class=\"delete\" class=\"btn\" data-id=" + res.id +
                        ">删除</button>" +
                        "<button class=\"add\" class=\"btn\" data-id=" + res.id +
                        ">添加</button>" +
                        "</td>" +
                        " </tr>";
                // }
                $('.t-body').html(html);
            }
        }
    });
    //查看
    $(document).on('click', ".see", function () {
        var id = $(this).attr('data-id');
        $.ajax({
            url: "http://localhost:3000/index/show",
            type: 'GET',
            data: {
                id: id
            },
            success: function (res) {
                if (res) {
                    alert('编号' + res.id + ',书名' + res.name);
                }
            }
        });
    })
    //修改
    $(document).on('click', ".edit", function () {
        $('.form-group').show();
        var id = $(this).attr('data-id');
        $("#id").val(id).attr('readonly', 'readonly');
        $("#name").val($(this).parents('tr').find('.book_name').text());
        $("#sure").on('click', function () {
            var name = $("#name").val();
            var id = $("#id").val();
            $.ajax({
                url: "http://localhost:3000/index/edit",
                type: 'GET',
                data: {
                    id: id,
                    name: name
                },
                success: function (res) {
                    if (res) {
                        alert('修改成功');
                        window.location.reload()
                    }
                }
            });
        })


    })
    //添加
    $(document).on('click', ".add", function () {
        $('.form-group').show();
        $("#sure").on('click', function () {
            var name = $("#name").val();
            var id = $("#id").val();
            $.ajax({
                url: "http://localhost:3000/index/add",
                type: 'GET',
                data: {
                    id: id,
                    name: name
                },
                success: function (res) {
                    if (res.status == 1) {
                        alert('添加成功');
                        window.location.reload()
                    } else {
                        alert('添加失败');
                        // window.location.reload()
                    }
                }
            });
        })


    })
    //删除
    $(document).on('click', ".delete", function () {
        var id = $(this).attr('data-id');
        $.ajax({
            url: "http://localhost:3000/index/delete",
            type: 'GET',
            data: {
                id: id,
            },
            success: function (res) {
                if (res) {
                    alert('删除成功');
                    window.location.reload()
                }
            }
        });
    })
})